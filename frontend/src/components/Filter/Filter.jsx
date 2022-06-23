import { useSelector } from 'react-redux'
import { subtitle, container } from './Filter.module.css'

const Filter = (props) => {
    const categories = useSelector(state => state.categories)
    return (
        <div className={container}>
            <span>
                <div className={subtitle}>
                    categorías
                </div>
                {categories.map(category => {
                    return (
                        <div>
                            <a href='#'>
                                {category.name}
                            <span>
                                (0)
                            </span>
                            </a>
                        </div>
                    )
                })}
            </span>
        </div>
    );
}

export default Filter