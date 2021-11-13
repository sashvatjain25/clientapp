import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { useSelector } from 'react-redux'

const PageWrapper = () => {
    const state = useSelector(state => state)
    const {
        pageIndex = 0
    } = state
    console.log('state', state)
    return (
        <div>
            <SwipeableViews enableMouseEvents index={pageIndex}>
                <div style={{ background: 'grey', height: '100px' }}>12</div>
                <div style={{ background: 'pink', height: '100px' }}>45</div>
                <div style={{ background: 'yellow', height: '100px' }}>2435</div>
            </SwipeableViews>
        </div>
    )
}

export default PageWrapper



// import React from 'react';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
// import SwipeableViews from 'react-swipeable-views';

// const styles = {
//   tabs: {
//     background: '#fff',
//   },
//   slide: {
//     padding: 15,
//     minHeight: 100,
//     color: '#fff',
//   },
//   slide1: {
//     backgroundColor: '#FEA900',
//   },
//   slide2: {
//     backgroundColor: '#B3DC4A',
//   },
//   slide3: {
//     backgroundColor: '#6AC0FF',
//   },
// };

// class PageWrapper extends React.Component {
//   state = {
//     index: 0,
//   };

//   handleChange = (event, value) => {
//     this.setState({
//       index: value,
//     });
//   };

//   handleChangeIndex = index => {
//     this.setState({
//       index,
//     });
//   };

//   render() {
//     const { index } = this.state;

//     return (
//       <div>
//         <Tabs value={index} fullWidth onChange={this.handleChange} style={styles.tabs}>
//           <Tab label="tab n°1" />
//           <Tab label="tab n°2" />
//           <Tab label="tab n°3" />
//         </Tabs>
//         <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
//           <div style={Object.assign({}, styles.slide, styles.slide1)}>slide n°1</div>
//           <div style={Object.assign({}, styles.slide, styles.slide2)}>
//             slide n°2
//             <Select value={10} autoWidth={false}>
//               <MenuItem value="">
//                 <em>None</em>
//               </MenuItem>
//               <MenuItem value={10}>Ten</MenuItem>
//             </Select>
//           </div>
//           <div style={Object.assign({}, styles.slide, styles.slide3)}>slide n°3</div>
//         </SwipeableViews>
//       </div>
//     );
//   }
// }

// export default PageWrapper;