import { useState } from 'react';

export default function SearchFilter() {
  const [search, setSearch] = useState('');
  const fruits = [
    'Apple',
    'Apricot',
    'Avocado',
    'Banana',
    'Blackberry',
    'Blueberry',
    'Cherry',
    'Coconut',
    'Cranberry',
    'Dragonfruit',
    'Durian',
    'Fig',
    'Grape',
    'Grapefruit',
    'Guava',
    'Jackfruit',
    'Kiwi',
    'Lemon',
    'Lime',
    'Lychee',
    'Mango',
    'Mangosteen',
    'Melon',
    'Orange',
    'Papaya',
    'Passionfruit',
    'Peach',
    'Pear',
    'Pineapple',
    'Plum',
    'Pomegranate',
    'Raspberry',
    'Starfruit',
    'Strawberry',
    'Tangerine',
    'Watermelon',
  ];

  const filteredFruits = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='component-container'>
      <h2>Practice 5 - Search Filter Fruits</h2>
      <input
        type='text'
        className='search-input'
        placeholder='Search fruit...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className='fruits-container'>
        {filteredFruits.length > 0
          ? filteredFruits.map((fruit) => (
              <p className='fruit-card' key={fruit}>
                {fruit}
              </p>
            ))
          : 'Fruit not found'}
      </div>
    </div>
  );
}

/**
 * =========================================
 * STEP 1
 * Kita akan menampilkan banyak data buah
 * ke layar.
 *
 * Karena datanya banyak,
 * maka kita simpan dalam ARRAY.
 * =========================================
 */

/**
 * =========================================
 * STEP 2
 * Kita ingin setiap buah tampil di UI.
 *
 * Karena kita ingin menampilkan
 * setiap isi array satu-persatu,
 * maka kita gunakan map().
 * =========================================
 */

/**
 * =========================================
 * STEP 3
 * Kita ingin user bisa mengetik sesuatu.
 *
 * Karena kita butuh input dari user,
 * maka kita gunakan tag <input>.
 * =========================================
 */

/**
 * =========================================
 * STEP 4
 * Kita ingin React mengetahui
 * apa yang diketik user.
 *
 * Karena data input akan berubah terus,
 * maka kita simpan menggunakan state.
 *
 * Maka kita gunakan useState().
 * =========================================
 */

/**
 * =========================================
 * STEP 5
 * Kita ingin mengambil isi input user
 * setiap kali user mengetik.
 *
 * Karena kita ingin mendeteksi perubahan input,
 * maka kita gunakan onChange.
 *
 * Dan untuk mengambil isi inputnya,
 * kita gunakan:
 *
 * event.target.value
 * =========================================
 */

/**
 * =========================================
 * STEP 6
 * Kita ingin isi input user
 * disimpan ke state.
 *
 * Karena state hanya bisa diubah
 * menggunakan setter,
 * maka kita gunakan:
 *
 * setSearch(...)
 * =========================================
 */

/**
 * =========================================
 * STEP 7
 * Kita ingin menampilkan
 * hanya buah yang cocok.
 *
 * Karena kita harus mengecek
 * semua data satu-persatu,
 * maka kita gunakan filter().
 * =========================================
 */

/**
 * =========================================
 * STEP 8
 * Kita ingin mengecek:
 *
 * "apakah nama buah mengandung
 * keyword dari user?"
 *
 * Karena kita ingin mengecek
 * apakah string mengandung string lain,
 * maka kita gunakan includes().
 * =========================================
 */

/**
 * =========================================
 * STEP 9
 * Kita ingin hasil filter
 * ditampilkan ke layar.
 *
 * Karena hasil filter adalah array,
 * maka kita gunakan map()
 * untuk render ke UI.
 * =========================================
 */

/**
 * =========================================
 * FLOW BESAR
 * =========================================
 *
 * user mengetik
 * ↓
 * onChange berjalan
 * ↓
 * ambil input user
 * ↓
 * update state
 * ↓
 * React rerender
 * ↓
 * filter data
 * ↓
 * tampilkan hasil baru
 */
