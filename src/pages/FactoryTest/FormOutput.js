// import {FormFactory} from "../../components/forms/FormFactory";
// export 'default' (imported as 'TestPage') was not found in './pages/FactoryTest/TestPage' (possible exports: TestPage)
// import { TestPage } from "../FormPage";

import  TestPage  from "./TestPage";
import Grid from "@mui/material/Grid";
import createStudentFormDefinitions from "./create-student-form-definitions";

const CreateStudentForm = ({control}) => {
    return (<form>
        <Grid container spacing={1}>
            {createStudentFormDefinitions.map((field, index) => (
                <TestPage key={index} field={field} control={control} />
                // <FormFactory key={index} field={field} control={control} />
            ))}
        </Grid>
    </form>);
};
export default CreateStudentForm;