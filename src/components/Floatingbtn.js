import React, {useState} from 'react'
import {
    FloatingMenu,
    MainButton,
    ChildButton,
  } from 'react-floating-button-menu';
  import MdAdd from '@material-ui/icons/KeyboardArrowUp';
  import MdClose from '@material-ui/icons/Clear';
  import MdFavorite from '@material-ui/icons/CodeSharp';
  import MdInfo from '@material-ui/icons/InfoSharp';
  import PlayCircleOutlineSharpIcon from '@material-ui/icons/PlayCircleOutlineSharp';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export default function Floatingbtn() {
    const [isOpen, setIsOpen] = useState(false);
    const notify = () => {
    toast.dark('Created by Lakshy Gupta', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });    
                        };

    const notify2 = () => {
        toast('Code Editor for HTML, CSS and JS', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
        }); 
        
    };

    const notify3 = () => {
        
    toast.error('Write HTML Code Here', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        });

        setTimeout(() => {
            toast.error('Write CSS code here', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                });
        }, 3000);

        setTimeout(() => {
            toast.error('Write Javascript code here', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                });
        }, 6000); 

        setTimeout(() => {
            toast.dark('Output will be displayed here', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                });
        }, 9000);
    }

    

    return (
        <>
            <FloatingMenu
    slideSpeed={500}
    direction="up"
    spacing={8}
    isOpen={isOpen}
  >
    <MainButton
      iconResting={<MdAdd style={{ fontSize: 20 }} nativeColor="white" />}
      iconActive={<MdClose style={{ fontSize: 20 }} nativeColor="white" />}
      backgroundColor="black"
      onClick={()=>setIsOpen(previsOpen => !previsOpen)}
      size={56}
    />
     <ChildButton
      icon={<MdFavorite style={{ fontSize: 20 }} nativeColor="black" />}
      backgroundColor="white"
      size={40}
      onClick={notify}
      
    />
     <ToastContainer />
    <ChildButton
      icon={<MdInfo style={{ fontSize: 20 }} nativeColor="black" />}
      backgroundColor="white"
      size={40}
      onClick={notify2}
    />
    <ChildButton
      icon={<PlayCircleOutlineSharpIcon style={{ fontSize: 20 }} nativeColor="black" />}
      backgroundColor="white"
      size={40}
      onClick={notify3}
    />
    <ToastContainer
    // position="top-left"
    autoClose={3000}
    hideProgressBar
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable={false}
    pauseOnHover={false}
    />
  </FloatingMenu>
        </>
    )
}
