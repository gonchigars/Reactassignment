import logo from './logo.svg';
import './App.css';
import VerticalButtons from './ass1.js';
import HorizontalButtons from './ass2.js';
import AppBarWithButton   from './ass3.js';
import SidebarWithButton from './ass4.js';
import CenteredButton from './ass5.js';
import ResponsiveGridButtons from './ass6.js';
import BottomButton from './ass7.js';
import CardWithButton from './ass8.js';
import DialogWithButton from './ass9.js';
import Layout from './ass10.js';






function App() {
  return (
    <div className="App">
        <VerticalButtons/>
        <HorizontalButtons/>
        <AppBarWithButton />
        <SidebarWithButton/>
        <CenteredButton/>
        <ResponsiveGridButtons/>
        <BottomButton/>
        <CardWithButton/>
        <DialogWithButton/>
        <Layout/>

      
    </div>
  );
}

export default App;
