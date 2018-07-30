import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Collapse,
    IconButton,
    Typography
} from "material-ui";

// TODO: This should probably be in a file and imported
let lessons = {
    "HelloWorld": {
        title: "Shrimp and Chorizo Paella",
        subheader: "September 14, 2016",
        image: "/static/images/cards/paella.jpg",
        cardHeaderTitle: "Contemplative Reptile",
        cardContentTypography: "This impressive paella is a perfect party dish and a fun meal to cook together with\n" +
        "                        your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        cardContentTypographyTitle: "Method:",
        cardContentTypographyParagraph: "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10\n" +
"                            minutes.",
        cardContentTypographyParagraph2: "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high\n" +
          "heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly\n" +
          "browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving\n" +
          "chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,\n" +
          "salt and pepper, and cook, stirring often until thickened and fragrant, about 10\n" +
          "minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.",
        cardContentTypographyParagraph3: "Set aside off of the heat to let rest for 10 minutes, and then serve."
    }
};

this.fetchLessonText = (lessonName) => {
    return lessonName ? this.lessons.get(lessonName) : null ;
};

export const LessonTextRenderer = (props) => (
    <div>
        {/*<section>*/}
            {/*<p onLoad={this.fetchLessonText()}>*/}
                {/*Loading lesson text ...*/}
            {/*</p>*/}
        {/*</section>*/}
        {/*<div style={{float:"right", width:"480px"}}>*/}
        <div style={{float: "right", width: window.visualViewport.width * 0.37, overflow: 'hidden'}}>
            <Card>
                <CardHeader
                    action={
                        <IconButton>

                        </IconButton>
                    }
                    title={lessons[props.lessonName].title}
                    subheader={lessons[props.lessonName].subheader}
                />
                <CardMedia
                    image={lessons[props.lessonName].image}
                    title={lessons[props.lessonName].cardHeaderTitle}
                />
                <CardContent>
                    <Typography component="p">
                        {lessons[props.lessonName].cardContentTypography}
                    </Typography>
                </CardContent>
                <withWidth>
                    <CardContent>
                        <Typography paragraph variant="body2">
                            {lessons[props.lessonName].cardContentTypographyTitle}
                        </Typography>
                        <Typography paragraph>
                            {lessons[props.lessonName].cardContentTypographyParagraph}
                        </Typography>
                        <Typography paragraph>
                            {lessons[props.lessonName].cardContentTypographyParagraph2}
                        </Typography>
                        <Typography>
                            {lessons[props.lessonName].cardContentTypographyParagraph3}
                        </Typography>
                    </CardContent>
                </withWidth>
            </Card>
        </div>
    </div>
);