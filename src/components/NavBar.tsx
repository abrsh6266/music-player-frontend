import { Button, HStack, Image, useColorMode } from "@chakra-ui/react";
import logo from "../assets/music logo.png";
import logo2 from "../assets/music logo2.png";
import ColorModeSwitch from "./ColorModeSwitch";
import { useState } from "react";
import UserForm from "./MusicForm";
function NavBar() {
  const [visible, setVisible] = useState(false);
  const handleCancel = () => {
    setVisible(false);
  };
  const { colorMode } = useColorMode();
  return (
    <>
      <HStack padding="20px">
        <Image
          src={colorMode === "light" ? logo : logo2}
          boxSize={{
            base: "100px",
            sm: "150px",
            md: "200px",
            lg: "250px",
            xl: "300px",
          }}
          maxWidth="100%"
          borderRadius={20}
        />
            <Button onClick={() => setVisible(true)}>Add Music</Button>
            <ColorModeSwitch />
          <UserForm visible={visible} onCancel={handleCancel} />
      </HStack>
    </>
  );
}
export default NavBar;
