import React, { useEffect, useContext, useState } from "react";
import { Box, Stack } from "@mui/material";
import CodeEditor from "./CodeEditor";
import CodeEditorTop from "./sub-components/CodeEditorTop";
import Header from "./sub-components/Header";
import Card from "./sub-components/Card";
import Drawer from "./sub-components/Drawer";
import FriendCodeEditor from "./FriendCodeEditor";

// import { fetchFromAPI } from '../utlis/fetchFromAPI';

const CodeEnviornment = () => {
    // useEffect(() => {
    //     const fetchAPI = async () => {
    //         const data = await fetchFromAPI('/api');
    //         console.log(data);
    //     }
    //     fetchAPI();
    // }, [])
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Header setIsOpen={setIsOpen} />
            <h3 style={{ borderTop: "2px solid green", textAlign: "center", color:"white"}}>
                Coding Enviornment
            </h3>
            <Stack
                direction={{
                    direction: "row",
                    xs: "column",
                    sm: "column",
                    md: "row",
                }}
                spacing={{ xs: 1, sm: 2, md: 2 }}
                padding={{ xs: 1, sm: 2, md: 2 }}
            >
                <Box
                    sx={{
                        // height: { sx: 'auto', md: '92vh' },
                        px: { sx: 0, md: 2 },
                        width: { sx: "auto", md: "40vw" },
                        backgroundColor: "#1e1e1e",
                        color: "white",
                        borderRadius: "8px",
                    }}
                >
                    <h2>Problem</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Pariatur commodi modi assumenda unde laboriosam
                        quos quae aut reiciendis harum iste, recusandae tenetur,
                        impedit eveniet mollitia repellat doloremque aspernatur
                        necessitatibus sequi? Quod sit voluptate iusto neque,
                        eos adipisci ullam distinctio tenetur id similique unde
                        hic culpa perferendis, ipsum, delectus eum. Nam quidem
                        cupiditate accusamus enim illum, minus ut dignissimos,
                        culpa tempora quod qui aut odio quasi ipsam, eius hic
                        iure. Cum nesciunt voluptas voluptates recusandae
                        consectetur aperiam molestias dicta, ex a repudiandae
                        velit quis deserunt adipisci ad vel dignissimos libero
                        rerum beatae. Odit magnam minus quae quibusdam pariatur
                        omnis dolore quia rerum sunt quo voluptate, vitae iusto
                        eum eaque voluptates! Laboriosam perspiciatis quibusdam
                        fugiat asperiores deserunt assumenda omnis quisquam ab
                        doloremque dolorum, libero nemo! Praesentium laboriosam
                        veritatis illo distinctio consequuntur temporibus nisi
                        dolore vero animi assumenda repellendus tempore fugiat
                        voluptatem eligendi consequatur, earum esse quis. Nemo
                        labore a aspernatur, quae amet, veniam qui non sed
                        voluptatum consectetur suscipit doloremque debitis,
                        similique sequi possimus placeat laborum modi excepturi
                        quo eaque natus! In exercitationem enim similique culpa
                        illum hic placeat nostrum ad sint dicta numquam, ipsa
                        voluptas, modi debitis. Laborum ut, unde sequi libero
                        iure nam tempora hic sed architecto obcaecati. Iste
                        sapiente voluptatum omnis placeat fugit quia fugiat,
                        veniam laudantium voluptates quaerat ad laborum nobis
                        ea, animi totam nihil reiciendis harum ullam ut illo.
                        Nesciunt impedit pariatur architecto nisi veritatis
                        saepe assumenda sit ab nulla voluptatibus. Maxime
                        corporis totam maiores inventore omnis! Repudiandae,
                        aspernatur. Soluta non nostrum eum magnam rem quae,
                        deleniti autem veniam mollitia, ullam numquam nam,
                        aliquam neque ea voluptatibus ut placeat est? Magnam
                        laudantium beatae ipsa similique vero suscipit, hic
                        excepturi aliquam corporis voluptatum, animi accusamus,
                        natus fugiat mollitia!
                    </p>
                </Box>
                <Box
                    sx={{
                        width: "100%",
                    }}
                >
                    <CodeEditorTop />
                    <CodeEditor />
                </Box>
            </Stack>
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                {/* <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card /> */}
                <FriendCodeEditor />
            </Drawer>
        </>
    );
};

export default CodeEnviornment;
