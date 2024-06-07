import React from "react";


interface CreateNewUserProps {
  visible: boolean;
  onClose: () => void;
}
export default function UserModal({ visible, onClose }:CreateNewUserProps) {
  

  return (
    // <main classNameName="userModal">
    //   <div classNameName="heading__part">
    //     <p>New User Info</p>
    //     <hr />
    //   </div>


    //   <div classNameName="inputs__area">
    //     <div>
    //       <label htmlFor="">Name</label>
    //       <input type="text" />
        
    //       <label htmlFor="">Username</label>
    //       <input type="text" />
    //     </div>

    //     <div>
    //       <label htmlFor="">Email</label>
    //       <input type="text" />
       
    //       <label htmlFor="">Street</label>
    //       <input type="text" />
    //     </div>

    //     <div>
    //       <label htmlFor="">City</label>
    //       <input type="text" />
    //     </div>
    //     <div>
    //       <label htmlFor="">Zipcode</label>
    //       <input type="text" />
    //     </div>
    //     <div>
    //       <label htmlFor="">Phone</label>
    //       <input type="text" />
    //     </div>
    //   </div>
    //   <div>fd</div>
    // </main>
<div>
<div className={` modal fade ${visible ? 'show' : ''}`} id="modal" style={{display: visible ? 'block' : 'none'}}>
  <div className="modal-dialog modal-dialog-centered ">
    <div className="modal-content ">
      <div className="modal-header ">
        <h1 className="modal-title fs-5" id="modalLabel">New User  Info</h1>
        <button type="button" className="btn-close bg-light rounded-5 h6"  aria-label="Close" onClick={onClose}></button>
        
      </div>
      <div className="modal-body">
      <div className="row align-items-start">
    <div  className="col" >
    <label htmlFor="">Name</label>
         <input type="text" className="rounded-2  border border-light p-2 " />
    </div>
    <div className="col">
    <label htmlFor="">Username</label>
         <input type="text" className="rounded-2  border border-light p-2" />
    </div>
    </div>

      <div className="row g-2 align-items-start">
    <div className="col">
      <div>
      <label htmlFor="">Email</label>
    
      </div>
         <input type="text"  className="rounded-2  border border-light p-2 pl-2" />
    </div>
    <div className="col">
    <label htmlFor="">Street</label>
         <input type="text" className="rounded-2  border border-light p-2" />
    </div>
    </div>
      <div className="row g-2 align-items-start">
    <div className="col">
    <label htmlFor="">City dsds </label>
         <input type="text" className="rounded-2  border border-light p-2 " />
    </div>
    <div className="col">
    <label htmlFor="">Zipcode </label>
         <input type="text" className="rounded-2  border border-light p-2 " />
    </div>
    </div>

     
      <div className="row g-2 ">
    <div className="col">
      <div>

    <label htmlFor="">Phone</label>
      </div>
         <input type="text"  className="rounded-2  border border-light "/>
    </div>
   
    </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary"onClick={onClose}>Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>
  );
}
