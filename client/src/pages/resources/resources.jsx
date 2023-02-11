import './resources.scss';

const Resources = () => {
  return (
    <div className="resources">
      <div className="resourcesFront">
        <div className="resourcesContainer">
          <h1 className='resourcesTitle'>Resources For Developers</h1>
          <div className="resourcesSubtitle">
            <h3>General Resources</h3>
          </div>
          <div className="resourcesList">
            <p className="paragraph">
              Online courses are an increasingly popular way for universities
              and professionals to teach programming and computer science in a
              structured format. As a result, new online courses will pop up all
              the time, so it's worth checking these resources periodically to
              see what's new.
            </p>
            <ul>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.codecademy.com/"
                >
                  Codeacademy{' '}
                </a>{' '}
                - offers free online courses in several different languages.
                However, Codecademy does have a tendency to teach only basic
                syntax, so you must work through more tutorials after finishing
                Codecademy. Focuses mainly on web development, Ruby, and Python.
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.coursera.org/"
                >
                  Coursera{' '}
                </a>{' '}
                - offers free online courses in many different fields from
                several different well-known universities. New courses are added
                every quarter, and content from old courses is typically
                archived. Because many courses appear to be new/may be a
                one-time thing, this page will not link to courses on Coursera
                unless it appears to be stable.
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.udacity.com/"
                >
                  Udacity{' '}
                </a>{' '}
                - offers free computer science courses taught by industry
                experts. Udacity offers two kinds of courses -- regular courses
                and nanodegrees. Regular courses are free. Regular courses with
                one-on-one tutoring/code review requires a monthly fee.
                Nanodegrees are typically for people with some prior coding
                experience, and cost more money.
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.edx.org/"
                >
                  edX{' '}
                </a>{' '}
                - a joint effort between MIT, Harvard, and Berkeley to provide
                free online versions of some of their courses.
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.openculture.com/computer_science_free_courses"
                >
                  OpenCulture
                </a>{' '}
                - similar to all of the above. Video lectures are typically
                available on iTunes or Youtube. Typically does not require you
                to complete assignments, unlike many other online courses.
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://ocw.mit.edu/"
                >
                  MIT OpenCourseWare{' '}
                </a>{' '}
                - static course materials taught at MIT. Unless otherwise noted,
                most content from this website tends to be very rigorous and
                fast-paced.
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.khanacademy.org/"
                >
                  Khan Academy{' '}
                </a>{' '}
                - contains a few courses on programming and computer science;
                does contain many more courses on all kinds of topics
                (especially math).
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://see.stanford.edu/Course"
                >
                  Stanford Engineering Everywhere{' '}
                </a>{' '}
                - static course materials taught at Stanford.
              </li>
            </ul>
          </div>
          <div className="resourcesSubtitle">
            <h3>Programming Languages</h3>
          </div>
          <div className="resourcesList">
            <ul>
            <li>
              <h4>C++</h4> 
              </li>
              <ul>
                Online courses:
                <li>
                  {' '}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://ocw.mit.edu/courses/6-096-introduction-to-c-january-iap-2011/"
                  >
                    Introduction to C++ For beginners, is fast-paced.{' '}
                  </a>{' '}
                </li>
                <li>
                  {' '}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://ocw.mit.edu/courses/6-088-introduction-to-c-memory-management-and-c-object-oriented-programming-january-iap-2010/"
                  >
                    Introduction to C Memory Management and C++ Object-Oriented
                    Programming.{' '}
                  </a> 
                  <br />
                  Geared towards people with prior experience in a programming
                  language that is not C or C++.{' '}
                </li>
                <li>
                  {' '}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://ocw.mit.edu/courses/6-s096-effective-programming-in-c-and-c-january-iap-2014/"
                  >
                    Effective Programming in C and C++.{' '}
                  </a>
                  Similar to the above.
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://see.stanford.edu/Course/CS106A"
                  >
                    Programming Methodology{' '}
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://see.stanford.edu/Course/CS106B"
                  >
                    Programming Abstractions{' '}
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://see.stanford.edu/Course/CS107"
                  >
                    Programming Paradigms{' '}
                  </a>
                </li>{' '}
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.coursera.org/learn/c-plus-plus-b"
                  >
                    Coursera's C++ for C Programmers{' '}
                  </a>
                </li>
              </ul>
              <ul>
                Books and tutorials (online):
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://greenteapress.com/thinkcpp/index.html"
                  >
                    How to Think Like a Computer Scientist.{' '}
                  </a>
                  A good introduction to basic C++.
                </li>
                <li>
                  {' '}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.learncpp.com/"
                  >
                    Learncpp.com.{' '}
                  </a>
                  Tends to focus more on syntax, and less on programming. Might
                  be useful for beginners, but as a reference, not a tutorial.
                </li>
                Books (paper):
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://stackoverflow.com/questions/388242/the-definitive-c-book-guide-and-list"
                  >
                    The Definitive C++ Book Guide and List.{' '}
                  </a>
                </li>
                A very well-maintained list of recommended books and resources
                on StackOverflow. Every book listed on this page is
                highly-recommended.
              </ul>
            </ul>
            <ul>
            <li>
              <h4>HTML, CSS and Javascript</h4> 
              </li>

              <ul>
                Online courses:
                <li>
                  {' '}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.codecademy.com/learn/paths/learn-how-to-build-websites"
                  >
                    Make an interactive website{' '}
                  </a>

                </li>
                <li>
                  {' '}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.codecademy.com/catalog/subject/web-development"
                  >
                    HTML & CSS.{' '}
                  </a>
                  Similar to the above.
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.codecademy.com/catalog/language/javascript"
                  >
                    Javascript{' '}
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.freecodecamp.org/"
                  >
                    Free Code Camp{' '}
                  </a>
                </li>
              </ul>
              <ul>
                Books and tutorials (online):
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://developer.mozilla.org/en-US/docs/Web"
                  >
                    Mozilla Developer Network.{' '}
                  </a>  
                  <br />

                  A series of tutorials covering HTML, CSS, JavaScript, and more. Some tutorials are appropriate for beginners while other tutorials will be more advanced.
                </li>
                <li>
                  {' '}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.htmldog.com/"
                  >
                    HtmlDog{' '}
                  </a> 
                  <br />
                  Tends to focus more on syntax, and less on programming. Might
                  be useful for beginners, but as a reference, not a tutorial.
                </li> 
                <li>
                  {' '}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://eloquentjavascript.net/"
                  >
                    Eloquent Javacript{' '}
                  </a> 
                  <br />
                  A book that teaches you how to write idiomatic and clean JavaScript. Assumes prior experience with JavaScript/another programming language.
                </li> 
                <li>
                  {' '}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Overview"
                  >
                    A Re-introduction to Javacript{' '}
                  </a> 
                  <br />
                  A guide which gives a thorough and detailed overview of JavaScript.

                </li>
                Books (paper):
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.amazon.com/gp/product/0596517742"
                  >
                    JavaScript: The Good Parts.{' '}
                  </a> 
                  <br /> 
                  A short book that covers the core aspects of JavaScript as well as info on writing idiomatic and clean JavaScript.

                </li>

              </ul>
            </ul> 
            <ul> 
              <li>
              <h4>Python</h4> 
              </li>
              <ul>
                Online courses:
                <li>
                  {' '}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://programming-23.mooc.fi/"
                  >
                    MOOC Python Programming 2023{' '}
                  </a>

                </li>
                <li>
                  {' '}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.edx.org/course/introduction-to-computer-science-and-programming-7#.VJw5pv-kAA"
                  >
                    Introduction to Computer Science and Programming Using Python{' '}
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://ocw.mit.edu/courses/6-189-a-gentle-introduction-to-programming-using-python-january-iap-2011/"
                  >
                    A Gentle Introduction to Programming Using Python{' '}
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.coursera.org/learn/python"
                  >
                    Programming for Everybody (Python){' '}
                  </a>
                </li> 
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.udacity.com/course/introduction-to-python--ud1110"
                  >
                    Programming Foundations with Python{' '}
                  </a>
                </li>
              </ul>
              <ul>
                Books and tutorials (online):
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://automatetheboringstuff.com/"
                  >
                    Automate the Boring Stuff with Python. {' '}
                  </a>  
                  <br />

                  A book for complete beginners. It is aimed at office workers, students, administrators, and hobbyists who want to learn how to write practical programs rather than necessarily become software engineers.
                                  </li>
                <li>
                  {' '}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://greenteapress.com/wp/think-python/"
                  >
                    Think Python{' '}
                  </a> 
                </li> 
                <li>
                  {' '}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://programarcadegames.com/"
                  >
                    Program Arcade Games With Python And Pygame{' '}
                  </a> 
                  <br />
                  A fantastic and thorough introduction to Python via making games. For beginners.

                </li>

              </ul>
            </ul>  
            </div> 

            <div className="resourcesSubtitle">
            <h3>Data Structures and Algorithms</h3>
          </div>
          <div className="resourcesList">
            <ul>  
            <li>
              <h4>DSA</h4> 
              </li>
              <ul>
                Online courses:
                <li>
                  {' '}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.udacity.com/course/intro-to-algorithms--cs215"
                  >
                    Intro to Algorithms{' '}
                  </a>

                </li>
                <li>
                  {' '}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.coursera.org/specializations/algorithms"
                  >
                    Algorithms: Design and Analysis, Part 1 {' '}
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.youtube.com/course?feature=edu&list=ECE621E25B3BF8B9D1&category=University%2FScience"
                  >
                    CS2: Data Structures and Algorithms {' '}
                  </a>
                </li>
              </ul>
              <ul>
                Books and tutorials (online):
                <li>
                  {' '}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://algs4.cs.princeton.edu/home/"
                  >
                    Algorithms by Robert Sedgewick{' '}
                  </a> 
                </li> 
                <li>
                  {' '}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://algorist.com/algorist.html"
                  >
                    The Stony Brook Algorithm Repository{' '}
                  </a> 
             
                </li> 
                <li>
                  {' '}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.bigocheatsheet.com/"
                  >
                    The Big-O Cheat Sheet{' '}
                  </a>  
                  <br /> 
                  A cheat sheet containing links and condensed information about the top most commonly-used/commonly-taught data structures and algorithms.
        
             
                </li>

              </ul>
            </ul>
        </div>  
        <div className="resourcesSubtitle">
            <h3>Tools</h3>
          </div>
          <div className="resourcesList"> 
            <ul>   
            <li>
              <h4>Git</h4> 
              </li> 
              <ul> 
              Online courses:
            <li>
                  {' '}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.udacity.com/course/version-control-with-git--ud123"
                  >
                    How to Use Git and GitHub{' '}
                  </a>

                </li>
                <li>
                  {' '}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://learngitbranching.js.org/"
                  >
                    Learn Git Branching {' '}
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://docs.github.com/en/get-started/quickstart/set-up-git"
                  >
                    Try Git {' '}
                  </a>
                </li>
              </ul>
              <ul>
                Books and tutorials (online):
                <li>
                  {' '}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.git-tower.com/learn/git/ebook"
                  >
                    Learn Version Control with Git{' '}
                  </a> 
                </li>

              </ul>
              </ul>
        </div> 
        </div>

      </div>
    </div>
  );
};
export default Resources;
