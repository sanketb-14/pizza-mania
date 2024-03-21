import { useEffect } from "react";

function ThemeSwitch() {
   useEffect(() => {
     /* Sets the data-theme attribute on html tag */
     document.documentElement.setAttribute(
       'data-theme',
       localStorage.getItem('theme') === 'winter' ? 'winter' : 'night',
     );
   }, []);

   return (
     <div className="mx-2 sm:mx-4">
       <svg className="hidden sm:inline m-2"
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
       >
         <circle cx="12" cy="12" r="5" />
         <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
       </svg>
       <input
         type="checkbox"
         className="toggle"
         defaultChecked={
           typeof window !== 'undefined' &&
           localStorage.getItem('theme') === 'winter'
         }
         onClick={(e) => {
           let newTheme = e.target.checked ? 'night' : 'winter';
           localStorage.setItem('theme', newTheme);
           document.documentElement.setAttribute('data-theme', newTheme);
         }}
       />
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className=" hidden sm:inline m-2" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
     </div>
   );
}

export default ThemeSwitch