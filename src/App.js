import './App.css';
import NotistackProvider from "./components/NotistackProvider";
import {MotionLazyContainer} from "./components/animate";
import {ProgressBarStyle} from "./components/ProgressBar";
import Router from "./routes";
import ThemeProvider from "./theme";
import RtlLayout from "./components/RtlLayout";

function App() {
    return (
        <ThemeProvider>
            <RtlLayout>
                <NotistackProvider>
                    <MotionLazyContainer>
                        <ProgressBarStyle/>
                        <Router/>
                    </MotionLazyContainer>
                </NotistackProvider>
            </RtlLayout>
        </ThemeProvider>
    );
}

export default App;
