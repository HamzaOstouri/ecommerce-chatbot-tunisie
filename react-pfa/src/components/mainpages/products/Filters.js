import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'

function Filters() {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories

    const [category, setCategory] = state.productsAPI.category
    const [sort, setSort] = state.productsAPI.sort
    const [search, setSearch] = state.productsAPI.search


    const handleCategory = e => {
        setCategory(e.target.value)
        setSearch('')
    }

    return (
        <div className="filter_menu">
            <div className="row">
                <span>Filters: </span>
                <select name="category" value={category} onChange={handleCategory} >
                    <option value=''>Tous les Produits</option>
                    {
                        categories.map(category => (
                            <option value={"category=" + category._id} key={category._id}>
                                {category.name}
                            </option>
                        ))
                    }
                </select>
            </div>

            <input type="text" value={search} placeholder="Enter your search!"
            onChange={e => setSearch(e.target.value.toLowerCase())} />

            <div className="row sort">
                <span>ordonné par: </span>
                <select value={sort} onChange={e => setSort(e.target.value)} >
                    <option value=''>plus récent</option>
                    <option value='sort=oldest'>plus ancien</option>
                    <option value='sort=-sold'>meilleures ventes</option>
                    <option value='sort=-price'>Prix: Haut-Bas</option>
                    <option value='sort=price'>Prix: Bas-Haut</option>
                </select>
            </div>
        </div>
    )
}

export default Filters