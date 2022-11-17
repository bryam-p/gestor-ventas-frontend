import { Fragment, useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { deleteData } from "../../utils/deleteData";

export default function ModalDelete({ personData }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
        deleteData(`http://localhost:4000/api/user/${personData.id_user}`)
    };

    return (
        <Fragment>
            <div onClick={handleOpen} variant="gradient" className="text-red-800">
                Delete
            </div>
            <Dialog
                open={open}
                handler={handleOpen}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
            >
                <DialogBody divider>
                    Esta seguro de eliminar el usuario:  <div className="font-bold">{personData.name}</div>
                </DialogBody>
                <DialogFooter className="content-modal">
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="red" onClick={handleOpen}>
                        <span>Eliminar</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </Fragment>
    );
}