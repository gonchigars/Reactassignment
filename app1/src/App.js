import './App.css';
import BasicButtons from './Button';
import VerticalButtonLayout from './vertical';
import HorizontalButtonLayout from './horizontal';
import Sidebar from './sidebar';
import CenteredButton from './centered';
import ResponsiveGrid from './Responsive';
import FixedButton from './fixed'
import CardComponent from './card';
import AppLayout from './Layout';


function App() {
  return (
    <div className="App">
    <BasicButtons />
    <VerticalButtonLayout /><br/>
    <HorizontalButtonLayout />
    <Sidebar />
    <CenteredButton />
    <CardComponent />
    <AppLayout />
    
  </div>
  );
}

export default App;


