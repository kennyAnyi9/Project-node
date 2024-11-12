import fs from 'fs'; // note that this file is in the app dir because these modules are only available in the app dir
import matter from 'gray-matter';
import path from 'path';
/* 1. we are going to get all mdx files from the dir */
const getMdxFiles = (dir: string) => {
  // this can be written in two ways
  //so we use the readdirSync method from the fs library to read the files in the directory
  //then we filter the files to only get the ones that end with .mdx and return them
  return fs.readdirSync(dir).filter((file) => file.endsWith('.mdx'));
  // return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

/* 2.then we read data form those files */
const readMdxFile = (dir: string)=>{
  // we use the readFileSync method from the fs library to read the content of the file
  // the purpose of the utf-8 is to read the file as a string
  // the first agument of the readFileSync method is the path to the file
  let rawContent = fs.readFileSync(dir, 'utf-8');
  //then we return the raw content of the file using gray-matter
  // what the matter method does is that it reads the content of the file and returns an object with the data and the content of the file
  return matter(rawContent);
}
/* 3.then we finally present the mdxx data and metadata */

const getMdxData = (dir: string)=>{
  // we get all the mdx files in the directory
  let mdxfiles = getMdxFiles(dir);
  return mdxfiles.map((file)=>{
    // we destructure the data and content from the readMdxFile function
    let {data: metadata, content} = readMdxFile(path.join(dir, file));
    // we get the slug of the file by getting the base name of the file and removing the extension
    let slug = path.basename(file, path.extname(file));
    // we return the data and the content of the file
    return {
      metadata,
      content,
      slug
    }
  })

}


export const getBlogPosts = ()=>{
  // we get the data from the mdx files in the content directory
  // this is how it happens
  // we get the current working directory using the process.cwd() method
  // then we join the current working directory with the path to the content directory
  // so the path to the content directory is src/app/blog/posts/content
  // you may wonder why it was not written as src/app/blog/posts/content
  // why do we do it 'src', 'app', 'blog', 'posts', 'content' ibstead of 'src/app/blog/posts/content'
  // this is because the path.join method joins the paths using the correct path separator
  // so it will join the paths using the correct path separator for the operating system
  // so if you are using windows it will join the paths using the backslash separator
  // if you are using linux it will join the paths using the forward slash separator
  // so it is better to use the path.join method to join paths

  return getMdxData(path.join(process.cwd(), 'src', 'app', 'blog', 'posts', 'content'));
}


/* write function to get the date */

export const formatDate = (date: string, includesRelative = true)=>{
  // we create a new date object from the date string
  let currentDate = new Date(date);
  if(!date.includes('T')){
    date = `${date}T00:00:00`;
  }

  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = '';

  switch (true){
    case yearsAgo > 0:
      formattedDate = `${yearsAgo} year${yearsAgo > 1 ? 's' : ''} ago`;
      break;
    case monthsAgo > 0:
      formattedDate = `${monthsAgo} month${monthsAgo > 1 ? 's' : ''} ago`;
      break;
    case daysAgo > 0:
      formattedDate = `${daysAgo} day${daysAgo > 1 ? 's' : ''} ago`;
      break;
    default:
      formattedDate = 'Today';
  }

  let fullDate = targetDate.toLocaleString("en-US", {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  if(!includesRelative){
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;

}
