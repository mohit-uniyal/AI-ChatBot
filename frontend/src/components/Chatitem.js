import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { GiArtificialHive } from "react-icons/gi";
import Markdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';


// function extractCodeFromBlocks(content){
//     if(content.includes("```")){
//         const blocks=content.split("```");
//         return blocks;
//     }
//     return [content];
// }

function getBlocks(str){
    let blocks=[];
    let i=0;
    while(i<str.length){
        if(i+2<str.length && str.substring(i, i+3)==='```'){
            let j=i+3;
            while(str.substring(j, j+3)!=='```'){
                j++;
            }
            blocks.push({
                type: 'code',
                content: str.substring(i+3, j)
            })
            i=j+3;
        }else{
            let j=i;
            while(j+2<str.length && str.substring(j, j+3)!=='```'){
                j++;
            }
            if(j+2<str.length){
                blocks.push({
                    type: 'text',
                    content: str.substring(i, j)
                })
                i=j;
            }else{
                blocks.push({
                    type: 'text',
                    content: str.substring(i)
                })
                i=str.length;
            }
        }
    }
    return blocks;
}

// function isCodeBlock(str){
//     if(
//         str.includes('=') ||
//         str.includes(';') ||
//         str.includes('[') ||
//         str.includes(']') ||
//         str.includes('{') ||
//         str.includes('}') ||
//         str.includes('#') ||
//         str.includes('//')
//     ){
//         return true;
//     }
//     return false;
// }

const Chatitem = ({ role, content }) => {
    const blocks=getBlocks(content);
    return (
        <div>
            {role === 'user' ? <div className='flex gap-3 bg-[#014455] rounded-lg'>
                <div className="profile mt-2 mx-3"><FaUserAlt className='text-xl' /></div>
                <div>
                    <div className='font-bold my-1'>You</div>
                    <div className='pb-2'>{content}</div>
                </div>
            </div> :
                <div className='flex gap-3 bg-[#021220] rounded-lg'>
                    <div className="profile mt-2 mx-3"><GiArtificialHive className='text-2xl' /></div>
                    <div>
                        <div className='font-bold my-1'>ChatGenius</div>
                        <div className='pb-2'>
                            {blocks.map((block)=>{
                                if(block.type==='code'){
                                    return <SyntaxHighlighter className='rounded-lg' language='javascript' style={dracula}>{block.content}</SyntaxHighlighter>
                                }
                                return <Markdown>{block.content}</Markdown>
                            })}
                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default Chatitem