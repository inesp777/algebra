
import React, { useState } from 'react';

export default function ArSearch() {
    const list = [
        'Banana',
        'Breskva',
        'Apple',
        'Orange',
        'Mango',
        'Pineapple',
        'Watermelon'
    ];


    const [newList, setNewList] = useState(list);

    const handleFilter = (e) => {
        const keyword = e.target.value;
        if (keyword === '') { setNewList(list); return }
        //  const result=list.filter(item => item.toLowerCase().indexOf(keyword.toLowerCase()) !==-1 );
        const result = list.filter(item => item.toLocaleLowerCase().startsWith(keyword.toLocaleLowerCase()))
        setNewList(result);
    }




    return (
        <div>
            <div>
                Search: <input name='query' type='text' onChange={handleFilter} />
            </div>

            {newList.map((item, index) => (<div key={index}>{item}</div>))}

        </div>
    );
}