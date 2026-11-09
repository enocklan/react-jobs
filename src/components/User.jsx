import React from 'react';


function UserCard({ 
  name,                             
  role = "Standard User",           
  avatar = "https://placehold.co/80", 
  isOnline = false                  
}) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", width: "220px" }}>
      <img src={avatar} alt={`${name}'s avatar`} width="80" style={{ borderRadius: "50%" }} />
      <h3>{name}</h3>
      <p><strong>Role:</strong> {role}</p>
      <p><strong>Status:</strong> {isOnline ? "🟢 Online" : "🔴 Offline"}</p>
    </div>
  );
}


function App() {
  return (
    <div style={{ display: "flex", gap: "16px" }}>
      
      <UserCard 
        name="Alice Johnson" 
        role="Administrator" 
        avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" 
        isOnline={true} 
      />
      <UserCard 
        name="Bob Smith" 
      />

    </div>
  );
}

export default App;