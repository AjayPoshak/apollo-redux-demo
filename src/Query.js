import gql from 'graphql-tag';

export const COUNTRY_LIST = gql`
	query countryList {
		countries {
			name
			code
			phone
			currency
		}
	}
`;
