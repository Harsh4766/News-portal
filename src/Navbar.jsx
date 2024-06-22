import React from "react";

function Navbar({setCategory,category,search,setSearch}){
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><span className="badge text-bg-primary">News Portal</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <div class={`nav-link ${category==="general"?'active':''}`} style={{cursor:"pointer"}} onClick={()=>setCategory("general")}>General</div>
        </li>
        <li class="nav-item">
          <div class={`nav-link ${category==="technology"?'active':''}`} style={{cursor:"pointer"}} onClick={()=>setCategory("technology")}>Technology</div>
        </li>
        <li class="nav-item">
          <div class={`nav-link ${category==="business"?'active':''}`} style={{cursor:"pointer"}} onClick={()=>setCategory("business")}>Business</div>
        </li>
        <li class="nav-item">
          <div class={`nav-link ${category==="health"?'active':''}`} style={{cursor:"pointer"}} onClick={()=>setCategory("health")}>Health</div>
        </li> 
        <li class="nav-item">
          <div class={`nav-link ${category==="sports"?'active':''}`} style={{cursor:"pointer"}} onClick={()=>setCategory("sports")}>Sports</div>
        </li>
        <li class="nav-item">
          <div class={`nav-link ${category==="entertainment"?'active':''}`} style={{cursor:"pointer"}} onClick={()=>setCategory("entertainment")}>Entertainment</div>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" style={{border:"1px solid #0d6efd",borderRadius:"5px"}} type="search" placeholder="Search News..." value={search} onChange={(e)=>setSearch(e.target.value)} aria-label="Search"/>
      </form>
    </div>
  </div>
</nav>
    );
}

export default Navbar;