import './index.css';
import CustomRoutes from './config/CustomRoutes';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    Aos.init({ duration: 1500 });
    window.scrollTo(0, 0);
  })

  return (
    <div className=' w-full h-auto bg-back overflow-x-hidden'>
      <CustomRoutes />
    </div>
  );
}

export default App;
