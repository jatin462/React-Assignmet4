import React from 'react';
import './myfile.css';
import post1 from './post1.png';
import post2 from './post2.png';
import post3 from './post3.png';
import Footer from './Footer';


function Home() {
  const styles= {
    color: 'red',
};
  return (
	  <div>
	  	<div className="post card">
                <div className="card-content">
	  		<a href="https://gizcrunch.com/2018/11/why-and-how-to-start-blog/"><h4>How To Start Your Own Blog Simplest Way</h4>
	                </a>
	                <img src={post1} alt="Post1 Banner" />
	  		<p> <span style={styles}>Published on: 11/11/2018 </span><br />
	  		    Ever since Internet has been introduced, the world has evolved at faster rate. Internet has become a medium for information as well as social communication. This has given to the rise of new web tool called Blogs. What are Blogs? In simple terms, Blogs are informational or discussion websites consisting of entries/posts in reverse chronological order with the most recent appearing first. There are millions of blogs live on internet which in itself has introduced an all new world called Blogosphere. So, before entering into such world of blogging, you should make yourself  clear with a very old theory which I call it as the “WHow theory“. Instead of just only knowing “How to start your blog”, you should first ask yourself “Why should I start it?”.
	  		</p>
	        </div>
	  	</div>
	        <div className="post card">
                <div className="card-content">
                        <a href="https://gizcrunch.com/2019/02/google-adiantum-encryption-low-end-smart/"><h4>Google Adiantum Is An Encryption For Low-end Smart Devices</h4>
                        </a>
	  		<img src={post2} alt="Post2 Banner" />
                        <p> <span style={styles}>Published on: 02/11/2018 </span> <br />
	    		Securing your personal stored information on your smart devices is always a crucial measure for every individuals. To protect data, people use apps/softwares to secure their data. But that’s not all, smart devices such as Android comes with built-in Cryptographic measures such as Encryption. Encryption ensures that whenever any unauthorized user tries to access data, they wont be able to read or access it. To ensure that your device is secured with the right encryption, it should be equipped with powerful hardware/software. This is because sometimes high-level encryption slows down the device performance. In order to resolve this issue, Google has come up with Adiantum with a tagline – An Encryption for everyone.
                        </p>
                </div>
                </div>
	        <div className="post card">
                <div className="card-content">
                        <a href="https://gizcrunch.com/2017/12/samsung-next-exynos-chipset-january-ces/"><h4>Samsung’s Next Exynos Chipset To Be Revealed On January 4th</h4>
                        </a>
	  		<img src={post3} alt="Post3 Banner" />
                        <p> 
	  		<span style={styles}> Published on: 12/30/2017 </span><br />
                        Securing your personal stored information on your smart devices is always a crucial measure for every individuals. To protect data, people use apps/softwares to secure their data. But that’s not all, smart devices such as Android comes with built-in Cryptographic measures such as Encryption. Encryption ensures that whenever any unauthorized user tries to access data, they wont be able to read or access it. To ensure that your device is secured with the right encryption, it should be equipped with powerful hardware/software. This is because sometimes high-level encryption slows down the device performance. In order to resolve this issue, Google has come up with Adiantum with a tagline – An Encryption for everyone.
                        </p>
                </div>
                </div>
          <Footer />
	  </div>
  );
}

export default Home;

