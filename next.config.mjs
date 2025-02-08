/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {domains:["m.media-amazon.com"]}
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"**.media-amazon.com",
                port:"",
                search:"",
            }
        ]
    }
};

export default nextConfig;
