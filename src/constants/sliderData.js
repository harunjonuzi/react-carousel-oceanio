import CakeIcon from "../icons/Cake";
import MrFaceIcon from "../icons/MrFace";

const SliderData = [
  {
    title: (
      <>
        An experience that makes us feel like we’re covered in maple syrup –
        <mark> It’s a good thing</mark>
      </>
    ),
    signature: (
      <>
        The whole team @<br />
        The Pancake Collective™
      </>
    ),
    icon: <CakeIcon />,
    theme: "pink",
  },
  {
    title: (
      <>
        This piece of software is{" "}
        <mark>
          <i>the shit</i>
        </mark>
        ,<br />
        I’ve never tried anything like it.
      </>
    ),
    signature: (
      <>
        Mr. Face
        <br />
        <span>Karma Guru @ Face Co™</span>
      </>
    ),
    icon: <MrFaceIcon />,
    theme: "cyan",
  },
];

// Temporarily add the same data mutltiple times to mock 5 slides
const tempSliderData = [...SliderData, ...SliderData, SliderData[0]];
export default tempSliderData;
