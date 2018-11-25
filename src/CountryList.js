import React from 'react';
import { Query } from 'react-apollo';
import { connect } from 'react-redux';
import { COUNTRY_LIST } from './Query';

const linkStyle = { 'line-height': '60px', 'text-align': 'left' };
const CountryList = () => (
	<Query query={COUNTRY_LIST}>
		{({ loading, error, data }) => {
			if (loading) return <p>loading....</p>;
			if (error) return <p>error....</p>;

			return <Countries list={data.countries} />;
		}}
	</Query>
);

const Countries = (props) => (
	<ul>
		{props.list &&
			props.list.map((country, index) => {
				return (
					<li key={index} style={linkStyle}>
						{country.name} {country.code}
					</li>
				);
			})}
	</ul>
);

const mapDispatchToProps = (dispatch, countryCode) => ({
	countryDetails: () => {
		dispatch({
			type: 'FETCH_COUNTRY_DETAILS',
			code: countryCode
		});
	}
});

export default connect(
	null,
	mapDispatchToProps
)(CountryList);
