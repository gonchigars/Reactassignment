import logo from './logo.svg';
import './App.css';
import VerticalButtons from './VerticalButtons';
import HorizontalButtons from './HorizontalButtons';
import AppBarWithButton from './AppbarWithButton';
import SidebarWithButton from './SideBarWithButtons';
import CenteredButton from './CenteredButton';
import ResponsiveGridButtons from './ResponsiveGridButtons';
import BottomButton from './BottomButton';
import CardWithButton from './CardWithButton';
import DialogWithButton from './DialogueWithB';
import LayoutExample from './Layout';
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
