import Navbar from '../components/navbar';
import SigninForm from '../components/signin_form';

export default function Signin() {
    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center bg-blue-900">
                <SigninForm />
            </div>
        </>
    );
}
