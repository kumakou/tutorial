import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import "./SlideDialog.css";

const tutorialSteps = [
  {
    label: "ようこそ、〇〇〇へ！",
    description: `簡単に実行環境を立てたいと思いませんか？このサービスは未来大生向けのオンライン実行環境ツールです。`,
    imgPath:
      "https://image.freepik.com/free-vector/woman-with-headphones-microphone-with-computer_113065-137.jpg",
  },
  {
    label: "実行環境をすぐに立てれる！",
    description:
      "簡単なボタン操作で各授業の実行環境を立てることができます。ターミナルボタンを押すと開発を始めることができます。",
    imgPath:
      "https://image.freepik.com/free-vector/chat-talk-young-people-with-smartphones-man-woman-standing-near-big-mobile-phone-with-speech-bubbles-chat-virtual-relationship-millennials_106299-18.jpg",
  },
  {
    label: "いらなくなったら削除！",
    description:
      "もし、いらない実行環境があったらボタン一つで削除することができます。",
    imgPath:
      "https://image.freepik.com/free-vector/chat-talk-young-people-with-smartphones-man-woman-standing-near-big-mobile-phone-with-speech-bubbles-chat-virtual-relationship-millennials_106299-18.jpg",
  },
  {
    label: "クリックでダウンロード！",
    description:
      "ファイル管理画面では作ったファイルをダウンロードすることができます。課題提出などの時にはダウンロードをしましょう！",
    imgPath:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a015a171760293.5bd0505fa9919.jpg",
  },
  {
    label: "ファイルをアップロード！",
    description:
      "アップロードボタンを押すとファイルをアップロードすることができます。使いたいファイルをアップロードしましょう！",
    imgPath:
      "https://cdn.dribbble.com/users/1804127/screenshots/6526452/brainstorm.png",
  },
  {
    label: "さぁ、始めよう！",
    description: "いますぐ実行環境をたてて！開発を始めよう！",
    imgPath:
      "https://cdn.dribbble.com/users/1391772/screenshots/4841029/attachments/1087269/4_illustration.jpg",
  },
];

export default function SimplesModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        type="button"
        onClick={handleOpen}
        color="primary"
        className="Button"
        variant="contained"
      >
        Open Modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="modal"
      >
        <ImgMediaCard onClose={handleClose} contents={tutorialSteps} />
      </Modal>
    </div>
  );
}

function ImgMediaCard(props) {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = props.contents.length;
  const theme = useTheme();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Card className="modalCard">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={props.contents[activeStep].imgPath}
          title="Contemplative Reptile"
        />
        <CardContent className="CardContent">
          <Typography gutterBottom variant="h5" component="h2">
            {props.contents[activeStep].label}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.contents[activeStep].description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          activeStep === props.contents.length - 1 ? (
            <Button size="small" onClick={props.onClose}>
              Get Started
            </Button>
          ) : (
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          )
        }
        backButton={
          activeStep === 0 ? (
            <Button size="small" onClick={props.onClose}>
              skip
            </Button>
          ) : (
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          )
        }
      />
    </Card>
  );
}
