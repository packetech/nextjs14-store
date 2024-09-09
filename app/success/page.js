import Link from "next/link";

export default function SuccessPage() {
    return (
        <div>
            Successfull !
            <div>
                <Link href={'/'}>Click to go to Home Page</Link>
            </div>
        </div>
    )
}