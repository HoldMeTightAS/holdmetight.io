import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import localeString from './localeString';
import investment from './investment';
import page from './page';

export default createSchema({
	name: 'default',
	types: schemaTypes.concat([localeString, investment, page]),
});
