import React, {useState, useEffect} from 'react';
import {ucfirst} from '../components/utils';
import Button from '../components/Button';

const categories = [
  {
    id: 1,
    name: 'Salle',
  },
  {
    id: 2,
    name: 'Cuisine',
  },
  {
    id: 3,
    name: 'Service',
  }
];

const users = [
  {
    id: 1,
    lastname: 'James',
    firstname: 'Aaron',
    categories: [1, 2, 3],
  },
  {
    id: 2,
    lastname: 'Wallace',
    firstname: 'Amanda',
    categories: [3],
  },
  {
    id: 3,
    lastname: 'Danger',
    firstname: 'Angela',
    categories: [2, 3],
  },
  {
    id: 4,
    lastname: 'White',
    firstname: 'Abella',
    categories: [1, 3],
  },
  {
    id: 5,
    lastname: 'Robertson',
    firstname: 'Darlene',
    categories: [1, 3],
  },
  {
    id: 6,
    lastname: 'Davis',
    firstname: 'Fred',
    categories: [2],
  },
  {
    id: 7,
    lastname: 'Wallace',
    firstname: 'Amanda',
    categories: [3],
  },
  {
    id: 8,
    lastname: 'Danger',
    firstname: 'Angela',
    categories: [1],
  },
  {
    id: 9,
    lastname: 'White',
    firstname: 'Abella',
    categories: [2, 3],
  },
  {
    id: 10,
    lastname: 'Robertson',
    firstname: 'Darlene',
    categories: [1],
  },
];

function Home() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);

    if (categories.length) {
      setActiveCategory(categories[0].id);
    }
  }, []);

  const getActiveCategoryClass = (categoryId) => {
    let _classes = 'p-2 px-8 cursor-pointer rounded-lg font-bold ';

    if (categoryId === activeCategory) {
      return _classes + 'bg-gray-400';
    }

    return _classes + 'opacity-4 text-gray-800';
  };

  const itemClass = (itemId) => {
    let _classes = 'p-3 px-7 flex justify-between items-center gap-4 cursor-pointer rounded-lg ';

    if (selectedItems.includes(itemId)) {
      return _classes + 'border-2 border-red-500';
    }

    return _classes + 'border border-gray-200';
  };

  const checkedItemBox = (itemId) => {
    let _classes = 'w-5 h-5 p-1 cursor-pointer text-white flex items-center justify-center rounded ';

    if (selectedItems.includes(itemId)) {
      return _classes + 'bg-red-500';
    }

    return _classes + 'border border-gray-200';
  };

  const changeActiveCategory = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const toggleItem = (itemId) => {
    setSelectedItems((old) => {
      if (selectedItems.includes(itemId)) {
        return old.filter(item => item !== itemId);
      }

      return [...old, itemId];
    });
  };

  const getFilteredUsers = () => {
    if (activeCategory) {
      return users.filter((user) => {
        let _categories = user.categories ?? [];
        if (!Array.isArray(categories) || !_categories.length) {
          return false;
        }

        return _categories.includes(activeCategory);
      });
    }

    return users;
  };

  return (
    <div className="flex flex-col py-3 w-full">
      <div className="flex gap-1 py-4 w-full overflow-x-auto">
        {categories.map((item, index) => {
            return (
              <div key={index} onClick={() => changeActiveCategory(item.id)}
                className={getActiveCategoryClass(item.id)}>
                {ucfirst(item.name)}
              </div>
            )
          })}
      </div>

      <div className="mt-2">
      {loading ? (<div>Loading...</div>) : (
        <div className="flex flex-col gap-y-3 h-112 overflow-y-auto">
          {getFilteredUsers().map(user => {
            return (
              <div key={user.id}
                className={itemClass(user.id)}>
                  <div className="flex gap-5 items-center justify-center rounded-lg">
                    <span width="100px" height="100px"
                      className="rounded-full px-3 py-4 bg-red-500 text-white shadow-md">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_7_38)">
                          <path d="M19.6458 7.35048C19.4058 10.6905 16.9336 13.2635 14.2378 13.2635C11.542 13.2635 9.06576 10.6913 8.82977 7.35048C8.58395 3.87578 10.9905 1.4375 14.2378 1.4375C17.4851 1.4375 19.8917 3.93902 19.6458 7.35048Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M13.9687 18.0561C8.64412 18.0561 3.52376 20.6635 2.24101 25.7416C2.07107 26.4134 2.49838 27.0779 3.19857 27.0779H24.7397C25.4399 27.0779 25.8648 26.4134 25.6973 25.7416C24.4145 20.5822 19.2942 18.0561 13.9687 18.0561Z" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
                          </g>
                          <defs>
                          <clipPath id="clip0_7_38">
                          <rect width="27.1875" height="27.1875" fill="white" transform="translate(0.375 0.5)"/>
                          </clipPath>
                          </defs>
                        </svg>

                    </span>
                    <span>
                      {user.firstname + ' ' + user.lastname}
                    </span>
                  </div>

                  <div>
                    <div className={checkedItemBox(user.id)} onClick={() => toggleItem(user.id)}>
                      <span className={selectedItems.includes(user.id) ? '' : 'hidden'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      </span>
                    </div>
                  </div>
              </div>
            )}
          )}
        </div>
      )}
      </div>

      <div className="mt-2">
        <Button action={() => {alert('okay')}}/>
      </div>
    </div>
  );
}

export default Home;
