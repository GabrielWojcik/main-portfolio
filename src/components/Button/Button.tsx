import Button from "@mui/material/Button";

function dowloadPDF() {
    // const pdfPath = '../../assets/pdf/Currículo-Gabriel-Wojcik.pdf'
    // window.open(pdfPath)
}


export function ButtonCV() {
    return(
        <div>
          <Button
                onClick={() => {
                    dowloadPDF
                }}
                >
                Click me
            </Button>
        </div>
    )
}