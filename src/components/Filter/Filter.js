import { Layout } from "./Filter.styled";
import PropTypes from 'prop-types';

export function Filter({ filter, onFilterChange }) {
    return (
        <Layout>
        <label htmlFor="filter">Find contacts by name</label>
        <input
            type="text"
            id="filter"
            name="filter"
            placeholder="Search contacts by name"
            value={filter}
            onChange={onFilterChange}
        />
        </Layout>
    );
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired, 
};



