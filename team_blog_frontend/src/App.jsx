import React, { useState, useEffect } from 'react';

// Helper function to get API URL
const getApiUrl = () => {
  try {
    // Try to access import.meta (works in Vite)
    return import.meta.env.VITE_API_URL || '/api';
  } catch (error) {
    // Fallback to process.env (works in Jest/Node)
    return process.env.VITE_API_URL || '/api';
  }
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [teamMembers, setTeamMembers] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [aboutContent, setAboutContent] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {

        const API_URL = getApiUrl();
        
        // Fetch team members
        const teamRes = await fetch(`${API_URL}/team-members/`);
        const teamData = await teamRes.json();
        setTeamMembers(teamData);

        // Fetch blog posts list
        const postsRes = await fetch(`${API_URL}/blog-posts/`);
        const postsData = await postsRes.json();
        setBlogPosts(postsData);

        // Fetch about content
        const aboutRes = await fetch(`${API_URL}/about/`);
        const aboutData = await aboutRes.json();
        setAboutContent(aboutData.length > 0 ? aboutData[0].content : '');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchPostDetail = async () => {
      if (typeof currentPage === 'number') {
        setLoading(true);
        try {

          const API_URL = getApiUrl();

          const postRes = await fetch(`${API_URL}/blog-posts/${currentPage}/`);
          const postData = await postRes.json();
          setSelectedPost(postData);
        } catch (error) {
          console.error('Error fetching post detail:', error);
          setSelectedPost(null);
        }
        setLoading(false);
      }
    };

    fetchPostDetail();
  }, [currentPage]);

  const renderContent = () => {
    if (loading) {
      return <div className="container">Loading...</div>;
    }

    switch (currentPage) {
      case 'home':
        return (
          <div className="container">
            <h1 className="blog-title">Our Team Blog</h1>
            <div className="blog-grid">
              {blogPosts.map((post) => (
                <div key={post.id} className="blog-post">
                  <div className="blog-post-content">
                    <h2 className="blog-post-title">{post.title}</h2>
                    <p className="blog-post-meta">By {post.author.name} on {new Date(post.date).toLocaleDateString()}</p>
                    <p className="blog-post-excerpt">{post.excerpt}</p>
                    <button
                      onClick={() => setCurrentPage(post.id)}
                      className="blog-post-button"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'team':
        return (
          <div className="container">
            <h1 className="team-title">Meet Our Team</h1>
            <div className="team-grid">
              {teamMembers.map((member) => (
                <div key={member.id} className="team-member">
                  <img
                    src={member.avatar || 'https://placehold.co/100x100?text=No+Image'}
                    alt={member.name}
                    className="team-member-img"
                  />
                  <h2 className="team-member-name">{member.name}</h2>
                  <p className="team-member-role">{member.role}</p>
                  <p className="team-member-bio">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'about':
        return (
          <div className="about-container">
            <h1 className="about-title">About Us</h1>
            <p className="about-text">{aboutContent}</p>
          </div>
        );
      default:
        if (!selectedPost) {
          return (
            <div className="container post-not-found">
              <h1 className="post-not-found-title">Post Not Found</h1>
              <button
                onClick={() => setCurrentPage('home')}
                className="post-not-found-button"
              >
                Go Back to Home
              </button>
            </div>
          );
        }
        return (
          <div className="post-detail-container">
            <button
              onClick={() => setCurrentPage('home')}
              className="post-back-button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Posts
            </button>
            <h1 className="post-detail-title">{selectedPost.title}</h1>
            <p className="post-detail-meta">By {selectedPost.author.name} on {new Date(selectedPost.date).toLocaleDateString()}</p>
            <div className="post-detail-content" dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased text-gray-800">
      <div className="nav">
        <nav className="nav-content">
          <div className="nav-title">Emerging Trends</div>
          <div className="nav-links">
            <button onClick={() => setCurrentPage('home')} className="nav-link">Blog</button>
            {/* Correctly added the data-testid here */}
            <button onClick={() => setCurrentPage('team')} className="nav-link" data-testid="team-btn">Team</button>
            <button onClick={() => setCurrentPage('about')} className="nav-link">About</button>
          </div>
        </nav>
      </div>

      <main className="main">
        {renderContent()}
      </main>

      <footer className="footer">
        <div className="container">
          <p className="footer-text">© 2025 Emerging Trends Team. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
