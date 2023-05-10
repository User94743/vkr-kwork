import React, {FC, useState} from 'react';
import '../styles/SrcComponent.scss';

const SrcComponent:FC = () => {

    const [searchTerm, setSearchTerm] = useState('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(searchTerm);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="container">

            <div className="image">
                <div className="image__label-bar">Найти нужную информацию</div>
                <form className="search-bar" onSubmit={handleSubmit}>
                    <input
                        id="search-input"
                        type="text"
                        value={searchTerm}
                        onChange={handleChange}
                    />
                    <button type="submit">Поиск</button>
                </form>
            </div>

        </div>
    );
};

export default SrcComponent;