import images from "../Images/index";
import Image from "next/image";

export default ({
  setOpenProfile,
  setCompleteModal,
  setGetModel,
  setStartModal,
}) => {
  const team = [
    {
      avatar: images.startShipment,
    },
    {
      avatar: images.compShipment,
    },
    {
      avatar: images.getShipment,
    },
  ];

  const openModelBox = (text) => {
    if (text === 1) {
      setOpenProfile(true);
    } else if (text === 2) {
      setStartModal(true);
    } else if (text === 3) {
      setCompleteModal(true);
    } else if (text === 4) {
      setGetModel(true);
    }
  };

  return (
    <section className="py-0 pb-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="mt-12 flex flex-col items-center gap-8">
          {/* Top center profile image */}
          <div
            onClick={() => openModelBox(1)}
            className="w-40 h-40"
          >
            <Image
              src={images.userProfile}
              className="w-full h-full object-cover object-center shadow-md rounded-full"
              alt="User Profile"
            />
          </div>
          {/* Bottom row of images */}
          <div className="grid grid-cols-3 gap-8">
            {team.map((item, i) => (
              <div
                key={i}
                onClick={() => openModelBox(i + 2)}
                className="w-full h-52"
              >
                <Image
                  src={item.avatar}
                  className="w-full h-full object-cover object-center shadow-md rounded-xl"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

