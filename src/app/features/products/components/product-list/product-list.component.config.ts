import { TableColumn } from "../../../../models/shared/table-column.models";


export const getTableColumnCollection = (

): TableColumn[] => [
    {
		header: 'action',
		field: 'isSelected',
		width: '100px',
	},
	{
		header: 'Name',
		field: 'name',
		sort: true,
		filter: true,
		styleClass: 'dropdown-column',
		width: '130px',
	},
	{
		header: 'Price',
		field: 'price',
		sort: true,
		filter: true,
		styleClass: 'dropdown-column-yesno-option',
		width: '100px',
	},
	{
		header: 'Weight',
		field: 'weight',
		sort: true,
		filter: true,
		width: '100px',
	},

];
