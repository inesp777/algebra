import React, { useState } from 'react';

export default function Filter() {

    // List of fruits
    const list = [
        'Banana',
        'Apple',
        'Orange',
        'Mango',
        'Pineapple',
        'Watermelon'
    ];

    // useState
    const [filterList, setFilterList] = useState(list);

    const handleSearch = (e) => {
        if (e.target.value === '') {
            setFilterList(list);
            return;
        }

        const filteredValues = list.filter(item =>
            item.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
        );
        setFilterList(filteredValues);
    };
    return (
        <div className='app'>
            <div>
                Search: <input name='query' type='text' onChange={handleSearch} />
            </div>

            {filterList.map((item, index) => (
                <div key={index}>{item}</div> //Display each item
            ))}
        </div>
    );
}
