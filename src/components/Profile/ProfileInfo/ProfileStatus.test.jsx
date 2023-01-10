import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {

    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" />)
        const instanse = component.getInstance();
        expect(instanse.state.status).toBe("it-kamasutra.com")
    })

    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" />)
        const root = component.root
        // eslint-disable-next-line testing-library/await-async-query
        let span = root.findByType("span");
        expect(span).not.toBeNull()
    })

    test("after creation <input> should't be displayed", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" />)
        const root = component.root
        expect( () => {
            // eslint-disable-next-line testing-library/await-async-query
            root.findByType("input");
        }).toThrow()
    })

    test("after creation <span> should contains correct status", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" />)
        const root = component.root
        // eslint-disable-next-line testing-library/await-async-query
        let span = root.findByType("span");
        expect(span.children[0]).toBe("it-kamasutra.com")
    })

    test("input should be displayed in editmode instead of span", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="it-kamasutra.com" updateStatus={mockCallback} />)
        const root = component.root
        // eslint-disable-next-line testing-library/await-async-query
        let span = root.findByType("span");
        span.props.onDoubleClick()
        // eslint-disable-next-line testing-library/await-async-query
        let input = root.findByType("input")
        expect(input.props.value).toBe("it-kamasutra.com")
    })

})