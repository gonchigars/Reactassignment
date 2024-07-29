
import './App.css';
import AppBarWithButton from './appbar';
import CardWithButton from './card';
import CenteredButton from './centering';
import DialogWithButton from './dialog';
import BottomButton from './fixed';
import LayoutExample from './header';
import HorizontalButtons from './horizontal';
import ResponsiveGridButtons from './responsive';
import SidebarWithButton from './sidebar';
import VerticalButtons from './vertical';


function App() {
  return (
    <div className="App">
    <AppBarWithButton/>
     <VerticalButtons/>
     <HorizontalButtons/>
     
     <SidebarWithButton/>
     <CenteredButton/>
     <ResponsiveGridButtons/>
     <BottomButton/>
     <CardWithButton/>
     <DialogWithButton/>
     <LayoutExample/>
    </div>
  );
}

export default App;
