describe('Upload', function() {
    it('Replaces content on second upload', function() {
        cy.visit("/")

        // Upload first file.
        cy.get("[data-cy='drop-zone']").attachFile("sample1.jpg", { subjectType: "drag-n-drop" })

        // Upload second file: it should replace (not add to) the original file.
        cy.get("[data-cy='drop-zone']").attachFile("sample2.jpg", { subjectType: "drag-n-drop" })

        // Ensure the system thinks there's only one file uploaded (the second one above).
        cy.contains("1 file(s) selected: sample2.jpg")
    })
})
