import Link from 'next/link'

export default function About(){
return (
    <div>
        <h1>About this course</h1>
        <p><b>Nextin</b> <i>perusteet!</i></p>
        <br></br>
       <Link href="/">Back to home</Link>
    </div>
  );
}