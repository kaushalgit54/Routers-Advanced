import PageContent from "../components/PageContent";
import NewsLetterSignup from "../components/NewsLetterSignup";
function NewsLetter(){
    return (
        <PageContent title='Join our awesome newsletter!' >
          <NewsLetterSignup/>
        </PageContent>
    )
}
export default NewsLetter;

export async function action({request}){
    const data = await request.formData();
    const email = data.get('email');

    //send to backend newsletter server
    console.log(email);
    return {message: 'Signup Successfull'};
}