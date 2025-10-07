class Mapping{

    fontMap = (i)=>{
        const font = {
            1: "roboto",
            2: "montserrat",
            3: "noto-sans",
            4: "be-vietnam-pro",
            5: "gentium",
            6: "carlito",
            7: "times-new-roman",
            8: "zen-kaku-gothic",
            9: "noto-sans-jp",
            10: "noto-sans-kr",
            11: "noto-serif-kr"
        }
        return font[i] || "";
    }

}

const mapping = new Mapping();
export default mapping;