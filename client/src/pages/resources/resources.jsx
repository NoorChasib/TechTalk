import './resources.scss';

const Resources = () => {
  return (
    <div className="resources">
      <div className="resourcesFront">
        <div className="resourcesContainer"> 
        <h1>Resources For Developers</h1>
          <div className='resourcesBox'>
            <h3>
            General Resources
            </h3>
            </div> 
            <div className='resourcesList'>
            <p className='paragraph'>
            Online courses are an increasingly popular way for universities and professionals to teach programming and computer science in a structured format. As a result, new online courses will pop up all the time, so it's worth checking these resources periodically to see what's new.
            </p> 
            <ul>
           <li> 
           <a rel="noopener noreferrer" target="_blank" href="https://www.codecademy.com/">Codeacademy </a> - offers free online courses in several different languages. However, Codecademy does have a tendency to teach only basic syntax, so you must work through more tutorials after finishing Codecademy. Focuses mainly on web development, Ruby, and Python. 
           </li> 
            <li>
            <a rel="noopener noreferrer" target="_blank" href="https://www.coursera.org/">Coursera </a> - offers free online courses in many different fields from several different well-known universities. New courses are added every quarter, and content from old courses is typically archived. Because many courses appear to be new/may be a one-time thing, this page will not link to courses on Coursera unless it appears to be stable. 
            </li> 
            <li>
            <a rel="noopener noreferrer" target="_blank" href="https://www.udacity.com/">Udacity </a> - offers free computer science courses taught by industry experts. Udacity offers two kinds of courses -- regular courses and nanodegrees. Regular courses are free. Regular courses with one-on-one tutoring/code review requires a monthly fee. Nanodegrees are typically for people with some prior coding experience, and cost more money. 
            </li> 
            <li>
            <a rel="noopener noreferrer" target="_blank" href="https://www.edx.org/">edX </a> - a joint effort between MIT, Harvard, and Berkeley to provide free online versions of some of their courses. 
            </li>  
            <li>
            <a rel="noopener noreferrer" target="_blank" href="https://www.openculture.com/computer_science_free_courses">OpenCulture</a> - similar to all of the above. Video lectures are typically available on iTunes or Youtube. Typically does not require you to complete assignments, unlike many other online courses. 
            </li>  
            <li>
            <a rel="noopener noreferrer" target="_blank" href="https://ocw.mit.edu/">MIT OpenCourseWare </a> - static course materials taught at MIT. Unless otherwise noted, most content from this website tends to be very rigorous and fast-paced. 
            </li>   
            <li>
            <a rel="noopener noreferrer" target="_blank" href="https://www.khanacademy.org/">Khan Academy </a> - contains a few courses on programming and computer science; does contain many more courses on all kinds of topics (especially math). 
            </li>   
            <li>
            <a rel="noopener noreferrer" target="_blank" href="https://see.stanford.edu/Course">Stanford Engineering Everywhere </a> - static course materials taught at Stanford. 
            </li>   
            </ul>
            </div>
        </div>
      </div>
    </div>
  );
};
//https://github.com/Michael0x2a/curated-programming-resources/blob/master/resources.md#html-css-and-javascript
export default Resources;