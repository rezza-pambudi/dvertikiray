import { courseSection } from '../data/CourseSection';
import '../styles/Course.css';
import parse from 'html-react-parser';
function Course() {
  return (
    <>
    <section id="courses">
            <div className="kolom">
                {parse(courseSection.content)}
            </div>
            <img src={courseSection.image}/>
        </section>
    </>
  )
}

export default Course
