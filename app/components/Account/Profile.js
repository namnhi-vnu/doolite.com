import Image from "next/image";
const Profile = () => {
    return (
        <div>
            <Image
                src="/avata.jpg"
                width={35}
                height={35}
                alt=""
                className="rounded-full"
            />
        </div>
    );
};

export default Profile;
