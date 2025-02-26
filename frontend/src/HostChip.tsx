import * as React from "react";
import Chip from "@material-ui/core/Chip";
import state from "./state";
import { hostId } from './shared/type';
import { observer } from "mobx-react";
import * as State from './shared/state'

const HostChip = observer(function HostChip({id}: {id:number}) {
    const page = state.page;
    if (page === null) return <span>Missing state.page</span>;

    let hosts = state.objectDigests.get(hostId);
    const host = hosts && hosts.get(id);
    let name = host && host.name;
    let up = state.hostsUp.has(id);

    return (
        <Chip style={{margin: '4px'}} key={id} label={name} color={up?"primary":"secondary"} onClick={
            (e)=>page.onClick(e, {type:State.PAGE_TYPE.Object, objectType: hostId, id})
        }></Chip>)
});

export default HostChip;
