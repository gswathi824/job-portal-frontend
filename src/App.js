import logo from './logo.svg';
import './App.css';
import './index.css'
import CreateJob from './components/CreateJob'
import EditJob from './components/EditJob';
import ViewJob from './components/ViewJob';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AdminHomePage from './components/AdminHomePAge';
import UserHomePage from './components/UserHomePage';
import JobDetails from './components/JobDetails';
import ViewProfiles from './components/ViewProfiles';
import UserProfile from './components/UserProfile';
import JobApplication from './components/JobApplication';
import EditUserProfile from './components/EditUserProfile';
import JobProfiles from './components/JobProfiles';
import JobSearchForm from './components/JobSearchForm';

function App() {
  const routes=createBrowserRouter([
    {path:"/",element:<AdminHomePage/>,children:[
      {path:"/admin/home",element:<JobDetails/>},
      {
        path:"admin/edit-job/:id",element:<EditJob/>
      },
      {
        path:"admin/create-job",element:<CreateJob/>
      },
        {
          path:"admin/view-job/:id",element:<ViewJob/>
        },
        {
          path:"admin/job/view-profiles/:id",element:<JobProfiles/>
        }
    ]},
      
    {
      path:"/user",element:<UserHomePage/>,children:[
        {path:"view-profiles",element:<ViewProfiles/>},
        {path:"create-profile",element:<UserProfile/>},
        {path:"edit-profile/:id",element:<EditUserProfile/>},
        {path:"job-search-form",element:<JobSearchForm/>},
        {path:"apply-job/:id",element:<JobApplication/>}
      ]
    }
   
    
  ])
  return (
     <RouterProvider router={routes}>

     </RouterProvider>
  );
}

export default App;
