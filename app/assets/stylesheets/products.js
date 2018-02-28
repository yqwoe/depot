import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'products table': {
    borderCollapse: 'collapse'
  },
  'products table tr td': {
    padding: [{ unit: 'px', value: 5 }, { unit: 'px', value: 5 }, { unit: 'px', value: 5 }, { unit: 'px', value: 5 }],
    verticalAlign: 'top'
  },
  'products list_image': {
    width: [{ unit: 'px', value: 60 }],
    height: [{ unit: 'px', value: 70 }]
  },
  'products list_desc': {
    width: [{ unit: '%H', value: 0.6 }]
  },
  'products list_desc dl': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'products list_desc dt': {
    color: '#244',
    fontWeight: 'bold',
    fontSize: [{ unit: 'string', value: 'larger' }]
  },
  'products list_desc dd': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'products list_actions': {
    fontSize: [{ unit: 'string', value: 'x-small' }],
    textAlign: 'right',
    paddingLeft: [{ unit: 'em', value: 1 }]
  },
  'products list_line_even': {
    backgroundColor: '#e0f8f8'
  },
  'products list_line_odd': {
    backgroundColor: '#f8b0f8'
  }
});
